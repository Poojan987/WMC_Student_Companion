# Generated by Django 3.2.5 on 2021-07-09 05:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('person', '0002_faculty_student'),
        ('course', '0002_alter_course_faculty'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='faculty',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='person.faculty'),
        ),
    ]