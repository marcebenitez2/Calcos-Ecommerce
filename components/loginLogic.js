const { default: supabase } = require("@/supabase/app")



const login = async () => {
    let { data: users, error } = await supabase
    .from('users')
    .select('*')

    console.log(data)
}

export default login