import { supabase } from "$lib/supabase";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        // TODO upload data to supabase
        const _data = await request.formData();
        const name = _data.get('name');
        const profilePic = _data.get('profile-pic');
        const audioFile = _data.get('audio');
        
        // console.log(typeof(profilePic));

        const { data, error } = await supabase
        .from('test')
        .insert({ name: name })
        .select('id');
        
        
        await supabase.storage
        .from('media')
        // @ts-ignore
        .upload('images/profile_pics/'+data[0].id+'.jpg', profilePic);

        await supabase.storage
        .from('media')
        // @ts-ignore
        .upload('audio/'+data[0].id+'.mp3', audioFile);

    
        return { success: true };
    }
  };

