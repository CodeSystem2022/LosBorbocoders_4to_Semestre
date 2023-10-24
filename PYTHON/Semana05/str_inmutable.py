
#help(str.capitalize)

mensaje1 = "hola mundo"
mensaje2 = mensaje1.capitalize()#hace que el primer carácter esté en mayúsculas y el resto en minúsculas.

print(f'{mensaje1}, id:{id(mensaje1)}')
print(f'{mensaje2}, id:{id(mensaje2)}')

mensaje1 += ' Adios'
print(f'{mensaje1}, id:{id(mensaje1)}')
