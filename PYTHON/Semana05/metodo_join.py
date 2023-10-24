
#help(str.join)

tupla_str = ("Hola","alumnos","tecnicatura","universitaria")
mensaje = '_'.join(tupla_str)
print(f'{mensaje}')

lisa_cursos = ['Java','Python','Js','Angular']
mensaje = ', '.join(lisa_cursos)
print(f'{mensaje}')

cadena = "HolaMundo"
mensaje = '.'.join(cadena)
print(f'{mensaje}')

diccionario = {'nombre': 'Juan', 'apellido': 'Perez', 'edad': '18'}
llaves = '-'.join(diccionario.keys())
valores = '--'.join(diccionario.values())
print(f'Mensaje: {llaves}, Type: {type(llaves)}')
print(f'Mensaje: {valores}, Type: {type(valores)}')
