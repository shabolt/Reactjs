<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
     $dsloaisanpham = [
        [
            'ten'=> 'Loại Sản Phẩm 1',
            'ds_san_pham'=> [
                [
                    'Hinh'=> "Hinhxe04.png",
                    'Ten'=> "SP thu 1",
                    'Gia'=> 50000,
                    
                ],
                [
                    'Hinh'=> "Hinhxe04.png",
                    'Ten'=> "SP thu 2",
                    'Gia'=> 50000,
                ]
            ]
            
        ],
        [
            'ten'=> 'Loại Sản Phẩm ',
            'ds_san_pham'=> [
                [
                    'Hinh'=> "Hinhxe04.png",
                    'Ten'=> "SP thu 1",
                    'Gia'=> 50000,
                    
                ],
                [
                    'Hinh'=> "Hinhxe04.png",
                    'Ten'=> "SP thu 2",
                    'Gia'=> 50000,
                ]
            ]
            
        ]

    ];
    echo json_encode($dsloaisanpham);
?>