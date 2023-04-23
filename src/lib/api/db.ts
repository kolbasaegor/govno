import { supabase } from '$lib/api/supabase';

export const addTrackToDb = async(track: { uploaded_by_id: string | undefined; name: FormDataEntryValue | null; author: FormDataEntryValue | null; path_to_img: string; path_to_audio: string; }) => {
    const { data } = await supabase
    .from('track')
    .insert(track)
    .select();

    return data;
}

export const uploadImage = async(path: string, img: string | Blob | ArrayBuffer | ArrayBufferView | FormData | NodeJS.ReadableStream | ReadableStream<Uint8Array>) => {
    await supabase.storage
    .from('image')
    .upload(path, img);
}

export const uploadAudio = async(path: string, audio: string | Blob | ArrayBuffer | ArrayBufferView | FormData | NodeJS.ReadableStream | ReadableStream<Uint8Array>) => {
    const {error} = await supabase.storage
    .from('audio')
    .upload(path, audio);
}

export const getAllTracks = async() => {
    const { data } = await supabase.from("track").select();

    let response = [];

    for (const t of data ?? []) {
        const userInfo = await getUserById(t.uploaded_by_id);

        response.push({
        meta: t,
        audioUrl: await generateAudioUrl(t.path_to_audio),
        imgUrl: await generateImgUrl(t.path_to_img),
        userInfo: userInfo,
        });
    }

    return response;
}

export const getUserById = async(id: Number) => {
    const { data } = await supabase
    .from('user')
    .select('id, username')
    .eq('id', id);

    return data ? data[0] : null;
}

export const generateAudioUrl = async(path: string) => {
  
  const { data } = await supabase
  .storage
  .from('audio')
  .getPublicUrl(path);

  return data.publicUrl;
}

export const generateImgUrl = async(path: string) => {
  
  const { data } = await supabase
  .storage
  .from('image')
  .getPublicUrl(path);

  return data.publicUrl;
}

export const  userExistInDb = async(login: string, password: string) => {
    const { data } = await supabase.from('user').select()
    .eq('username', login)
    .eq('password', password);

   return (data?.length === 1) ? true : false;
}

export const getUserByUsername = async(username: string) => {
    const { data } = await supabase.from('user').select('id, username')
    .eq('username', username)

    return data?.length === 1 ? data[0] : null;
}

export const  userAlreadyRegistered = async(login: string) => {
    const { data } = await supabase.from('user').select()
    .eq('username', login)

   return (data?.length === 1) ? true : false;
}

export const registerUser = async(username: string, password: string) => {
    const { error } = await supabase.from('user').insert({
        username: username,
        password: password,
    })

    return error ? false : true;
}

export const getTracksUploadedById = async(id: Number) => {
    const { data } = await supabase.from("track").select()
    .eq('uploaded_by_id', id);

    return data;
}

export const getTrackById = async(id: Number) => {
    const { data } = await supabase.from("track").select()
    .eq('id', id);

    if (!data) return null;

    const track = data[0];
    
    track.imgUrl = await generateImgUrl(track.path_to_img);
    track.audioUrl = await generateAudioUrl(track.path_to_audio);

    return {
        track: track,
        user: await getUserById(track.uploaded_by_id),
    }
}

export const removeTrack = async(id: Number) => {
    const data = await getTrackById(id);

    if (!data) return;

    await supabase
    .from('track')
    .delete()
    .eq('id', id);

    
    await supabase
    .storage
    .from('audio')
    .remove([data.track.path_to_audio]);

    await supabase
    .storage
    .from('image')
    .remove([data.track.path_to_img]);

}