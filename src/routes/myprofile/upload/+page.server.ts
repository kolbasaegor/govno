import {addTrackToDb, uploadImage, uploadAudio} from '$lib/api/db';
export const prerender = false;

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, cookies }) => {
        const userId = cookies.get('session_id');
        const _data = await request.formData();
        const track_name = _data.get('track_name');
        const author = _data.get('author');
        const track_cover = _data.get('track_cover');
        const audio = _data.get('audio');

        if (!track_cover || !audio) return {
            success: false
        }

        const r = Math.random().toString(36).slice(2, 7);
        const storage_audio_path = r + '.mp3';
        const storage_img_path = 'track_pic/' + r + '.jpg';

        // write to table 'track'
        await addTrackToDb({
            uploaded_by_id: userId,
            name: track_name,
            author: author,
            path_to_img: storage_img_path,
            path_to_audio: storage_audio_path,
        });
        
        // upload track cover to bucket 'image'
        await uploadImage(storage_img_path, track_cover);

        // upload audio to bucket 'audio'
        await uploadAudio(storage_audio_path, audio);

        return { success: true };
    }
  };

