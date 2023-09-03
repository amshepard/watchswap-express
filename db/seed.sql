-- Connect to the 'watchswap' database
\c watchswap

-- Insert records into the 'watches' table with image URLs
INSERT INTO watches (brand, model, year, condition, price, image_url) VALUES
    ('Rolex', 'Submariner', 2023, 'Excellent', 7500.00, 'https://content.thewosgroup.com/productimage/40921722/40921722_1.png'),
    ('Omega', 'Seamaster', 2022, 'Good', 3500.00, 'https://www.reeds.com/media/catalog/product/cache/38c3c1b8e53ef11aa9803a5390245afc/m/e/men_s_omega_seamaster_diver_300_co-axial_brushed_stainless_steel_black_dial_watch_o21030422001001-1-19859677-hx1b3cd82c.jpg'),
    ('TAG Heuer', 'Carrera', 2021, 'Like New', 4500.00, 'https://images.watchfinder.co.uk/imgv3/stock/250117/TagHeuer-Carrera-CV2014.BA0794-250117-230807-083135.jpg;quality=55;h=1280'),
    ('Seiko', 'Prospex', 2023, 'New', 300.00, 'https://d2j6dbq0eux0bg.cloudfront.net/images/16115183/3412899060.jpg'),
    ('Citizen', 'Eco-Drive', 2022, 'Good', 150.00, 'https://www.zales.com/productimages/processed/V-18525527_0_800.jpg'),
    ('Bulova', 'Precisionist', 2021, 'Excellent', 250.00, 'https://m.media-amazon.com/images/I/711bClbFHdL._AC_UY879_.jpg'),
    ('Tissot', 'Le Locle', 2023, 'Like New', 750.00, 'https://www.tissotwatches.com/media/catalog/product/T/0/T006.407.11.043.00_R.png'),
    ('Fossil', 'Grant', 2022, 'Good', 100.00, 'https://fossil.scene7.com/is/image/FossilPartners/BQ2552_main?$sfcc_fos_hi-res$'),
    ('Casio', 'G-Shock', 2021, 'New', 80.00, 'https://wpsg.imgix.net/Images/items/W-DW9052-1V_media-01.png');
