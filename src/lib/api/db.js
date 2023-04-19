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

    return data;
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