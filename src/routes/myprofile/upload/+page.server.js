import { supabase } from "$lib/supabase";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const _data = await request.formData();
        const track_name = _data.get('track_name');
        const author = _data.get('author');
        const track_cover = _data.get('track_cover');
        const audio = _data.get('audio');

        const r = Math.random().toString(36).slice(2, 7);
        const storage_audio_path = r + '.mp3';
        const storage_img_path = 'track_pic/' + r + '.jpg';

        // write to table 'track'
        const { error } = await supabase
        .from('track')
        .insert({
            uploaded_by_id: 0,
            name: track_name,
            author: author,
            path_to_img: storage_img_path,
            path_to_audio: storage_audio_path,
        });
        
        // upload track cover to bucket 'image'
        if (track_cover) {
            await supabase.storage
            .from('image')
            .upload(storage_img_path, track_cover);
        }

        // upload audio to bucket 'audio'
        if (audio) {
            await supabase.storage
            .from('audio')
            .upload(storage_audio_path, audio);
        }

        return { success: true };
    }
  };

