# 6.1 Parámetro posicional de tipo String

# dar formato a un string

nombre = 'Ariel'
edad = 28
mensaje_con_formato = 'Mi nombre es %s y tengo %d años' % (nombre, edad)
#print(mensaje_con_formato)

# 6.2 Avanzamos desde una tupla

#Creamos una tupla

persona = ('Carla', 'Gomez', 5000.00)
mensaje_con_formato = 'Hola %s %s. Tu sueldo es %.2f'  # % persona # Aquí le pasamos el objeto que es tupla

# print(mensaje_con_formato % persona)

# 6.3 Uso del método format() -> utilizamos place holder parte1

nombre = 'Juan'
edad = 19
sueldo = 3000

#mensaje_con_formato = 'Nombre {0} Edad {1} Sueldo {2:.2f}'.format(nombre, edad, sueldo)
#print (mensaje_con_formato)

#mensaje = 'Nombre {0} Edad {1} Sueldo {2:.2f}'.format(nombre, edad, sueldo)
#print(mensaje)

# # 6.3 Uso del método format() -> utilizamos place holder parte2

#mensaje = 'Sueldo {} Edad {} Nombre {}'.format(nombre, edad, sueldo)
#Sin el indice va a seguir un orden de izquierda a derecha, de alli la importancia de trabajar con los diferentes indices
#print(mensaje)

# # 6.3 Uso del método format() -> utilizamos place holder parte3

mensaje = 'Nombre {n} Edad {e} Sueldo {s:.2f}'.format(n=nombre,
                                                      e=edad,
                                                      s=sueldo)
#print(mensaje)

diccionario = {'nombre': 'Ivan', 'edad': 35, 'sueldo': 8000.00}
mensaje = 'Nombre {dic[nombre]} Edad {dic[edad]} Sueldo {dic[sueldo]:.2f}'.format(
    dic=diccionario)
print(mensaje)