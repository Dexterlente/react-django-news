# Generated by Django 4.1.5 on 2023-02-21 20:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_post_archived'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='archived',
            new_name='archived_post',
        ),
    ]
