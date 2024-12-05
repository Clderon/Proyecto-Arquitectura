from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

class UsuarioManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """Crea y guarda un usuario con un correo electrónico y una contraseña."""
        if not email:
            raise ValueError("El usuario debe tener una dirección de correo electrónico")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)  # Hashear la contraseña
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """Crea un superusuario."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class Usuario(AbstractBaseUser):
    email = models.EmailField(unique=True)  # Usar el correo como identificador único
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    contraseña = models.CharField(max_length=255)
    estado = models.CharField(max_length=50)
    genero = models.CharField(max_length=1)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    ultimo_acceso = models.DateTimeField(auto_now=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    objects = UsuarioManager()

    USERNAME_FIELD = 'email'  # Usar el email como el campo principal para la autenticación
    REQUIRED_FIELDS = ['nombre', 'apellido']  # Campos obligatorios para crear un usuario

    def __str__(self):
        return self.email
