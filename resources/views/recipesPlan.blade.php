<html lang="pl">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>Plan </title>
        <style>
        body {
            font-family: DejaVu Sans, serif;
            margin:0;
            font-size: 14px;
        }

        .container {
            background-color: grey;
        }
        </style>
    </head>
    <body>
        <h1 style="text-align: center">Plan jedzenia</h1>
        <h3 style="text-align: center; margin-bottom: 50px;">{{$header}}</h3>
            @foreach($recipes  as $key=>$items)
            <div style="width: 49%; height: 150px; display: inline-block; margin-top: 20px;">
                <p><b><?=ucfirst($key) ;?></b></p>
                <ul>
                    @foreach($items as $item)
                    <li><?= $item->name ;?></li>
                    @endforeach
                </ul>
            </div>
            <span></span>
            @endforeach
    </body>
</html>
