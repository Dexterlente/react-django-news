# Generated by Django 4.1.5 on 2023-03-17 22:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_token'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Token',
        ),
    ]