<html lang="pl">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Plan </title>
    <style>
        body {
            font-family: DejaVu Sans, serif;
            margin: 0;
            font-size: 14px;
        }

        .container {
            background-color: grey;
        }
    </style>
</head>
<body>
<h1 style="text-align: center">List zakupów</h1>
<div>
        <ul>
            @foreach($products  as $key=>$product)
                <li style="margin-top: 2px; margin-bottom: 2px">
                        <?= $key; ?>
                        <?= $product; ?>
                </li>
            @endforeach
        </ul>
    </div>
</body>
</html>
