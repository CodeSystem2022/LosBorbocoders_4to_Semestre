# Tipo float
a = 3.0

a = float(10) # argumento (int)
a = float('10')
print(f'a: {a:.2f}')

# Notacion exponencial 
a = 3e5
print(f'a: {a:.2f}')

a = 3e-5
print(f'a: {a:.5f}')

# Si incluye un float todo cambia a float

a = 4.0 + 5
print(a)
print(type(a))
