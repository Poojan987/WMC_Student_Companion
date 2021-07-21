# Generated by Django 3.2.5 on 2021-07-21 10:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('person', '0011_alter_student_course'),
    ]

    operations = [
        migrations.CreateModel(
            name='TodoData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('desc', models.TextField()),
                ('dateTime', models.DateTimeField(auto_now_add=True)),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='person.student')),
            ],
        ),
    ]