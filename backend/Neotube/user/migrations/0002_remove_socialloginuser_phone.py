# Generated by Django 3.1.6 on 2021-02-18 17:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='socialloginuser',
            name='phone',
        ),
    ]
