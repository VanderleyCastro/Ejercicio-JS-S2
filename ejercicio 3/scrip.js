const usuarios = [
    {
        nombre:"Carlos",
        edad: 25,
        activo: true
    },
    {
        nombre:"Ana",
        edad: 17,
        activo: false   
    },
    {
        nombre:"Luis",
        edad: 30,
        activo: true   
    },
    {
        nombre:"Sofia",
        edad: 15,
        activo: true   
    }
];

const usuariosActivos = usuarios.filter(usuario => usuario.activo);

console.log("Usuarios activos: ");
console.log(usuariosActivos);

const mayoresEdad = usuarios.filter(usuario => usuario.edad >= 18);

console.log("Usuarios mayores de edad: ");
console.log(mayoresEdad);