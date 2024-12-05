from django.db import models

# El modelo Rol (equivalente a api_rol)
class Rol(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

    class Meta:
        db_table = 'api_rol'  

# El modelo Usuario (equivalente a api_usuario)
class Usuario(models.Model):

    GENERO_CHOICES = [
        ('M', 'Masculino'),
        ('F', 'Femenino'),
    ]

    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, unique=True)
    contraseña = models.CharField(max_length=255)
    idRol = models.ForeignKey(Rol, on_delete=models.CASCADE, default=2)
    genero = models.CharField(max_length=1, choices=GENERO_CHOICES)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    ultimo_acceso = models.DateTimeField(auto_now=True)
    estado = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.nombre} {self.apellido} ({self.email})"

    class Meta:
        db_table = 'api_usuario'  
