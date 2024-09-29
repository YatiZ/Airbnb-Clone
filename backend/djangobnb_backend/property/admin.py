from django.contrib import admin

# Register your models here.
from .models import Property, Reservation

admin.site.register(Property)

admin.site.register(Reservation)

admin.site.site_title = 'Air BnB'
admin.site.site_header = 'Air Bnb Admin Dashboard'