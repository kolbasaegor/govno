import { supabase } from '$lib/api/supabase';

// @ts-ignore
export const addTrackToDb = async(track) => {
    const { data, error } = await supabase
    .from('track')
    .insert(track)
    .select();

    if (error) console.log(error);
    else return data;
}

// @ts-ignore
export const uploadImage = async(path, img) => {
    const {error} = await supabase.storage
    .from('image')
    .upload(path, img);

    if (error) console.log(error);
}

// @ts-ignore
export const uploadAudio = async(path, audio) => {
    const {error} = await supabase.storage
    .from('audio')
    .upload(path, audio);

    if (error) console.log(error);
}

export const getAllTracks = async() => {
    const { data } = await supabase.from("track").select();

    let response = [];

    // @ts-ignore
    for (const t of data) {
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

// @ts-ignore
export const getUserById = async(id) => {
    const { data } = await supabase
    .from('user')
    .select('id, username')
    .eq('id', id);

    return data ? data[0] : null;
}

/**
 * @param {string} path
 */
export const generateAudioUrl = async(path) => {
  
  const { data } = await supabase
  .storage
  .from('audio')
  .getPublicUrl(path);

  return data.publicUrl;
}

/**
 * @param {string} path
 */
export const generateImgUrl = async(path) => {
  
  const { data } = await supabase
  .storage
  .from('image')
  .getPublicUrl(path);

  return data.publicUrl;
}

// @ts-ignore
export const  userExistInDb = async(login, password) => {
    const { data } = await supabase.from('user').select()
    .eq('username', login)
    .eq('password', password);

   return (data?.length === 1) ? true : false;
}

// @ts-ignore
export const getUserByUsername = async(username) => {
    const { data } = await supabase.from('user').select('id, username')
    .eq('username', username)

    return data?.length === 1 ? data[0] : null;
}

// @ts-ignore
export const  userAlreadyRegistered = async(login) => {
    const { data } = await supabase.from('user').select()
    .eq('username', login)

   return (data?.length === 1) ? true : false;
}

// @ts-ignore
export const registerUser = async(username, password) => {
    const { error } = await supabase.from('user').insert({
        username: username,
        password: password,
    })

    return error ? false : true;
}

// @ts-ignore
export const getTracksUploadedById = async(id) => {
    const { data } = await supabase.from("track").select()
    .eq('uploaded_by_id', id);

    return data;
}

// @ts-ignore
export const getTrackById = async(id) => {
    const { data } = await supabase.from("track").select()
    .eq('id', id);

    // @ts-ignore
    const track = data[0];
    
    track.imgUrl = await generateImgUrl(track.path_to_img);
    track.audioUrl = await generateAudioUrl(track.path_to_audio);

    return {
        track: track,
        user: await getUserById(track.uploaded_by_id),
    }
}

// @ts-ignore
export const removeTrack = async(id) => {
    
    const data = await getTrackById(id);

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