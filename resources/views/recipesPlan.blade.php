<html lang="pl">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Plan </title>
        <style>
        body {font-family: DejaVu Sans, serif;
             margin:0;
            font-size: 14px;
        }
        </style>
    </head>
    <body>
    <h1 style="text-align: center">Plan jedzenia</h1>
    <h3 style="text-align: center">{{$header}}</h3>

    @foreach($recipes  as $key=>$items)
        <p><b><?=ucfirst($key) ;?></b></p>
        <ul>
        @foreach($items as $item)
                <li><?= $item->name ;?></li>
        @endforeach
        </ul>
    @endforeach
    </body>
</html>
