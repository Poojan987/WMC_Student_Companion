# Generated by Django 3.2.5 on 2021-07-24 03:59

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('person', '0017_auto_20210724_0023'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tododata',
            name='due_date',
            field=models.DateTimeField(default=datetime.datetime(2021, 7, 24, 9, 29, 28, 486026)),
        ),
    ]