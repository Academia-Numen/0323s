import axios from 'axios'

const listado = async () =>{
    const { data } = await axios.get('https://0323s-production.up.railway.app/api/info')
    return data
}

const nuevoAlumno = async (nombre,dni,edad,curso,turno) =>{
    const { data } =await axios.post('https://0323s-production.up.railway.app/api/crear',{
        nombre,
        dni,
        edad,
        curso,
        turno
    })
    return data
}

const editarAlumno = async (nombre,dni,edad,curso,turno, id) =>{
    const { data } =await axios.put('https://0323s-production.up.railway.app/api/editar/' + id,{
        nombre,
        dni,
        edad,
        curso,
        turno
    })
    return data
}
const borrarAlumno = async (id) =>{
    const { data } =await axios.delete('https://0323s-production.up.railway.app/api/borrar/'+id)
    return data
}


const listadoConToken = async (token) =>{
    const { data } = await axios.get('https://0323s-production.up.railway.app/api/info',{
        headers:{
            JWToken: token
        }
    })
    return data
}

const nuevoAlumnoConToken = async (nombre,dni,edad,curso,turno, token) =>{
    const { data } =await axios.post('https://0323s-production.up.railway.app/api/crear',{
        nombre,
        dni,
        edad,
        curso,
        turno
    },{
        headers:{
            JWToken: token
        } 
    })
    return data
}

const editarAlumnoConToken = async (nombre,dni,edad,curso,turno, id,token) =>{
    const { data } =await axios.put('https://0323s-production.up.railway.app/api/editar/' + id,{
        nombre,
        dni,
        edad,
        curso,
        turno
    },{
        headers:{
            JWToken: token
        } 
    })
    return data
}

const borrarAlumnoConToken = async (id,token) =>{
    const { data } = await axios.delete('https://0323s-production.up.railway.app/api/borrar/'+id,{
        headers:{
            JWToken: token
        } 
    })
    return data
}

const tokenLogin = async (email, password) =>{
    const {data}= await axios.post('https://0323s-production.up.railway.app/user/logintoken',{
        email,
        password
    })
    return data
}