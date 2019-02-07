# -*- coding: utf-8 -*-
{
    'name': "POS Print Note Ticket Copy",
    'version': '1.0.0',
    'category': 'Point of Sale',
    'author': 'Kevin Jimenez',
    'website': 'http://katana.do',
    'sequence': 0,
    'depends': [
        'point_of_sale'
    ],
    'data': [
        'template/import_library.xml',
    ],
    'qweb': [
        'static/src/xml/*.xml'
    ],
    'images': ['static/description/icon.png'],
    'application': True,
}
