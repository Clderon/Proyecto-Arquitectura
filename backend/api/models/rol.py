from django.db import models

# El modelo Rol (equivalente a api_rol)
class Rol(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

    class Meta:
        db_table = 'api_rol'  
