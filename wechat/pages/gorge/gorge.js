// pages/gorge/gorge.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: '暴食',
        show: '',
        recipe: {
            name: '食谱',
            display: false,
            content: [{
                id: '1',
                food_url: '../../images/Loaf_of_Bread.png',
                name: 'Loaf of Bread',
                satisfy: ['零食', '面包'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 6, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{kind: 'formula', content: {formula_url: '../../images/Flour.png', formula_quantity: '3'}}]]
            }, {
                id: '2',
                food_url: '../../images/Potato_Chips.png',
                name: 'Potato Chips',
                satisfy: ['零食', '蔬菜'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 6, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '3',
                food_url: '../../images/Vegetable_Soup.png',
                name: 'Vegetable Soup',
                satisfy: ['零食', '汤', '蔬菜'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '2'}
                }], [{kind: 'text', content: '(任意不同蔬菜)'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}]]
            }, {
                id: '4',
                food_url: '../../images/Jelly_Sandwich.png',
                name: 'Jelly Sandwich',
                satisfy: ['零食', '面包'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Berries.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Berries.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Syrup.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '5',
                food_url: '../../images/Fish_Stew.png',
                name: 'Fish Stew',
                satisfy: ['Fish', '汤'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '2'}
                }], [{kind: 'text', content: '(任意蔬菜 or '}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '6',
                food_url: '../../images/Turnip_Cake.png',
                name: 'Turnip Cake',
                satisfy: ['零食', '蔬菜'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Turnip.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Turnip.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ' )'}]]
            }, {
                id: '7',
                food_url: '../../images/Potato_Pancakes.png',
                name: 'Potato Pancakes',
                satisfy: ['零食', '蔬菜'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '8',
                food_url: '../../images/Potato_Soup.png',
                name: 'Potato Soup',
                satisfy: ['零食', '汤', '蔬菜'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '9',
                food_url: '../../images/Fishball_Skewers.png',
                name: 'Fishball Skewers',
                satisfy: ['零食', 'Fish'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Twigs.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜 or '}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '10',
                food_url: '../../images/Meatballs_Gorge.png',
                name: 'Meatballs',
                satisfy: ['零食', 'Meat'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '2'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ', 任意蔬菜)'}]]
            }, {
                id: '11',
                food_url: '../../images/Meat_Skewers.png',
                name: 'Meat Skewers',
                satisfy: ['零食', 'Meat'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '2'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Twigs.png', formula_quantity: '1'}}]]
            }, {
                id: '12',
                food_url: '../../images/Stone_Soup.png',
                name: 'Stone Soup',
                satisfy: ['零食', '汤'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Rocks.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '任意蔬菜1'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Berries.png'}
                }, {kind: 'text', content: ', a different vegetable)'}]]
            }, {
                id: '13',
                food_url: '../../images/Croquette.png',
                name: 'Croquette',
                satisfy: ['零食', '蔬菜'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}]]
            }, {
                id: '14',
                food_url: '../../images/Roast_Vegetables.png',
                name: 'Roast Vegetables',
                satisfy: ['蔬菜'],
                kitchen: [{
                    kitchen_url: '../../images/Small_Casserole_Dish.png',
                    kitchen_text: 'Small Casserole Dish'
                }, {kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '2'}
                }], [{kind: 'text', content: '(任意不同蔬菜)'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}]]
            }, {
                id: '15',
                food_url: '../../images/Meatloaf.png',
                name: 'Meatloaf',
                satisfy: ['Meat'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Placeholder.png', formula_quantity: '2'}}]]
            }, {
                id: '16',
                food_url: '../../images/Carrot_Soup.png',
                name: 'Carrot Soup',
                satisfy: ['零食', '汤', '蔬菜'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '17',
                food_url: '../../images/Fish_Pie.png',
                name: 'Fish Pie',
                satisfy: ['Fish'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 10, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Foliage.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Turnip.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '18',
                food_url: '../../images/Fish_and_Chips.png',
                name: 'Fish and Chips',
                satisfy: ['Fish'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 12, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 3,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Potato.png', formula_quantity: '1'}}]]
            }, {
                id: '19',
                food_url: '../../images/Meat_Pie.png',
                name: 'Meat Pie',
                satisfy: ['Meat'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 12, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 3,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ', 任意蔬菜)'}]]
            }, {
                id: '20',
                food_url: '../../images/Sliders.png',
                name: 'Sliders',
                satisfy: ['零食', '面包', 'Meat'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 12, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 3,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ', 任意蔬菜 except '}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '21',
                food_url: '../../images/Fist_Full_of_Jam_Gorge.png',
                name: 'Fist Full of Jam',
                satisfy: ['甜点', '零食'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Berries.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Berries.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Syrup.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '22',
                food_url: '../../images/Jelly_Roll.png',
                name: 'Jelly Roll',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Berries.png', formula_quantity: '2'}}]]
            }, {
                id: '23',
                food_url: '../../images/Carrot_Cake.png',
                name: 'Carrot Cake',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 3,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Flour.png', formula_quantity: '2'}}]]
            }, {
                id: '24',
                food_url: '../../images/Garlic_Mashed_Potatoes.png',
                name: 'Garlic Mashed Potatoes',
                satisfy: ['零食', '蔬菜'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 3,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Potato.png', formula_quantity: '2'}}]]
            }, {
                id: '25',
                food_url: '../../images/Garlic_Bread.png',
                name: 'Garlic Bread',
                satisfy: ['零食', '面包'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 3,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '2'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Garlic.png', formula_quantity: '1'}}]]
            }, {
                id: '26',
                food_url: '../../images/Tomato_Soup.png',
                name: 'Tomato Soup',
                satisfy: ['汤', '零食', '蔬菜'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '27',
                food_url: '../../images/Sausage.png',
                name: 'Sausage',
                satisfy: ['零食', 'Meat'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ', 任意蔬菜)'}]]
            }, {
                id: '28',
                food_url: '../../images/Candied_Fish.png',
                name: 'Candied Fish',
                satisfy: ['零食', 'Fish'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 2, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Syrup.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Syrup.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '29',
                food_url: '../../images/Stuffed_Mushroom.png',
                name: 'Stuffed Mushroom',
                satisfy: ['零食', '蔬菜'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 2, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Onion.png', formula_quantity: '1'}}]]
            }, {
                id: '30',
                food_url: '../../images/Ratatouille_Gorge.png',
                name: 'Ratatouille',
                satisfy: ['蔬菜'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 2, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '3'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Turnip.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ', no duplicates)'}]]
            }, {
                id: '31',
                food_url: '../../images/Bruschetta.png',
                name: 'Bruschetta',
                satisfy: ['零食', '蔬菜', '面包'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Foliage.png'}
                }, {kind: 'text', content: ', '}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ', '}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png'}
                }, {kind: 'text', content: ', '}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '32',
                food_url: '../../images/Meat_Stew.png',
                name: 'Meat Stew',
                satisfy: ['汤', 'Meat'],
                kitchen: [{kitchen_url: '../../images/Large_Cookpot.png', kitchen_text: 'Large Cookpot'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ',任意蔬菜)'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ', 任意蔬菜)'}]]
            }, {
                id: '33',
                food_url: '../../images/Hamburger.png',
                name: 'Hamburger',
                satisfy: ['Meat', '面包'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ', 任意蔬菜)'}]]
            }, {
                id: '34',
                food_url: '../../images/Fish_Burger.png',
                name: 'Fish Burger',
                satisfy: ['Fish', '面包'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png'}
                }, {kind: 'text', content: ', 任意蔬菜)'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ' 任意蔬菜)'}]]
            }, {
                id: '35',
                food_url: '../../images/Mushroom_Burger.png',
                name: 'Mushroom Burger',
                satisfy: ['面包', '蔬菜'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '36',
                food_url: '../../images/Fish_Steak_Gorge.png',
                name: 'Fish Steak',
                satisfy: ['Fish'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 7, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Foliage.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}]]
            }, {
                id: '37',
                food_url: '../../images/Curry.png',
                name: 'Curry',
                satisfy: ['Meat', '汤'],
                kitchen: [{kitchen_url: '../../images/Large_Cookpot.png', kitchen_text: 'Large Cookpot'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 7, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}]]
            }, {
                id: '38',
                food_url: '../../images/Spaghetti_and_Meatball.png',
                name: 'Spaghetti and Meatball',
                satisfy: ['意面', 'Meat'],
                kitchen: [{kitchen_url: '../../images/Large_Cookpot.png', kitchen_text: 'Large Cookpot'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 7, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '39',
                food_url: '../../images/Lasagna.png',
                name: 'Lasagna',
                satisfy: ['意面', 'Meat'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 7, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '40',
                food_url: '../../images/Poached_Fish.png',
                name: 'Poached Fish',
                satisfy: ['Fish'],
                kitchen: [{kitchen_url: '../../images/Large_Cookpot.png', kitchen_text: 'Large Cookpot'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 7, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Foliage.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}]]
            }, {
                id: '41',
                food_url: '../../images/Shepherds_Pie.png',
                name: 'Shepherds Pie',
                satisfy: ['Meat'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 7, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Carrot.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Turnip.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ', '}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '42',
                food_url: '../../images/Candy.png',
                name: 'Candy',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{kind: 'formula', content: {formula_url: '../../images/Syrup.png', formula_quantity: '3'}}]]
            }, {
                id: '43',
                food_url: '../../images/Bread_Pudding.png',
                name: 'Bread Pudding',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 2, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '2'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Syrup.png', formula_quantity: '1'}}]]
            }, {
                id: '44',
                food_url: '../../images/Waffles_Gorge.png',
                name: 'Waffles',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 2, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '2'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Syrup.png', formula_quantity: '1'}}]]
            }, {
                id: '45',
                food_url: '../../images/Berry_Tart.png',
                name: 'Berry Tart',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Small_Casserole_Dish.png', kitchen_text: 'Small Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Berries.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Syrup.png', formula_quantity: '1'}}]]
            }, {
                id: '46',
                food_url: '../../images/Macaroni_and_Cheese.png',
                name: 'Macaroni and Cheese',
                satisfy: ['意面', '奶酪'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '47',
                food_url: '../../images/Bagel_and_Fish.png',
                name: 'Bagel and Fish',
                satisfy: ['面包', 'Fish', '零食'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '48',
                food_url: '../../images/Grilled_Cheese.png',
                name: 'Grilled Cheese',
                satisfy: ['零食', '面包', '奶酪'],
                kitchen: [{kitchen_url: '../../images/Small_Grill.png', kitchen_text: 'Grill'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '49',
                food_url: '../../images/Cream_of_Mushroom.png',
                name: 'Cream of Mushroom',
                satisfy: ['零食', '汤', '奶酪', '蔬菜'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '50',
                food_url: '../../images/Pierogies_Gorge.png',
                name: 'Pierogies',
                satisfy: ['奶酪', '蔬菜'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 4, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 4, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Potato.png', formula_quantity: '1'}}]]
            }, {
                id: '51',
                food_url: '../../images/Manicotti.png',
                name: 'Manicotti',
                satisfy: ['奶酪', '意面'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 6, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 6, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Foliage.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '52',
                food_url: '../../images/Cheeseburger.png',
                name: 'Cheeseburger',
                satisfy: ['奶酪', '面包', 'Meat'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 6, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 6, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ', 任意蔬菜)'}]]
            }, {
                id: '53',
                food_url: '../../images/Creamy_Fettuccine.png',
                name: 'Creamy Fettuccine',
                satisfy: ['意面'],
                kitchen: [{kitchen_url: '../../images/Large_Cookpot.png', kitchen_text: 'Large Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 3, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '2'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Garlic.png', formula_quantity: '1'}}]]
            }, {
                id: '54',
                food_url: '../../images/Onion_Soup.png',
                name: 'Onion Soup',
                satisfy: ['汤', '零食', '蔬菜'],
                kitchen: [{kitchen_url: '../../images/Large_Cookpot.png', kitchen_text: 'Large Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 3, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Onion.png', formula_quantity: '2'}}]]
            }, {
                id: '55',
                food_url: '../../images/Breaded_Cutlet.png',
                name: 'Breaded Cutlet',
                satisfy: ['Meat'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 3, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '56',
                food_url: '../../images/Creamy_Fish.png',
                name: 'Creamy Fish',
                satisfy: ['Fish'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 8, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 3, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Salmon.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Onion.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '57',
                food_url: '../../images/Pizza.png',
                name: 'Pizza',
                satisfy: ['Meat', '奶酪'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Toma_Root.png', formula_quantity: '1'}}]]
            }, {
                id: '58',
                food_url: '../../images/Pot_Roast.png',
                name: 'Pot Roast',
                satisfy: ['Meat'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png'}
                }, {kind: 'text', content: ',任意蔬菜)'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '59',
                food_url: '../../images/Crab_Cake.png',
                name: 'Crab Cake',
                satisfy: ['零食'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 5, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Crab_Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Crab_Meat.png'}
                }, {kind: 'text', content: ',任意蔬菜 except '}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Toma_Root.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '60',
                food_url: '../../images/Steak_Frites.png',
                name: 'Steak Frites',
                satisfy: ['Meat'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Potato.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '61',
                food_url: '../../images/Shooter_Sandwich.png',
                name: 'Shooter Sandwich',
                satisfy: ['Meat', '面包'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '62',
                food_url: '../../images/Bacon_Wrapped_Meat.png',
                name: 'Bacon Wrapped Meat',
                satisfy: ['Meat'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 8,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat_Scraps.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '63',
                food_url: '../../images/Crab_Roll.png',
                name: 'Crab Roll',
                satisfy: ['面包'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 4, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Crab_Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Crab_Meat.png'}
                }, {kind: 'text', content: ', 任意蔬菜)'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '(任意蔬菜)'}]]
            }, {
                id: '64',
                food_url: '../../images/Meat_Wellington.png',
                name: 'Meat Wellington',
                satisfy: ['Meat'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 4, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 1, coin: '../../images/Sapphire_Medallion.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Meat.png'}
                }, {kind: 'text', content: ', '}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ')'}], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ', '}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Garlic.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Mushroom.png'}
                }, {kind: 'text', content: ')'}], [{kind: 'text', content: '(no duplicate of previous ingredient)'}]]
            }, {
                id: '65',
                food_url: '../../images/Crab_Ravioli.png',
                name: 'Crab Ravioli',
                satisfy: ['奶酪', '意面'],
                kitchen: [{kitchen_url: '../../images/Large_Cookpot.png', kitchen_text: 'Large Cookpot'}],
                reward: [{quantity: 2, coin: '../../images/Red_Mark.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 6, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 2,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 3, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Crab_Meat.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Spot_Spice.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Crab_Meat.png'}
                }, {kind: 'text', content: ', 任意蔬菜)'}]]
            }, {
                id: '66',
                food_url: '../../images/Caramel_Cube.png',
                name: 'Caramel Cube',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Cookpot.png', kitchen_text: 'Cookpot'}],
                reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 2,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 7,
                    coin: '../../images/Old_Coin.png'
                }],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Syrup.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Placeholder.png', formula_quantity: '1'}
                }], [{kind: 'text', content: '('}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png'}
                }, {kind: 'text', content: ','}, {
                    kind: 'formula',
                    content: {formula_url: '../../images/Syrup.png'}
                }, {kind: 'text', content: ')'}]]
            }, {
                id: '67',
                food_url: '../../images/Scone.png',
                name: 'Scone',
                satisfy: ['甜点', '面包'],
                kitchen: [{kitchen_url: '../../images/Large_Grill.png', kitchen_text: 'Large Grill'}],
                reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 4,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 4, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Berries.png', formula_quantity: '1'}}]]
            }, {
                id: '68',
                food_url: '../../images/Trifle.png',
                name: 'Trifle',
                satisfy: ['甜点'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 6,
                    coin: '../../images/Old_Coin.png'
                }],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 6, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '2'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '1'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Berries.png', formula_quantity: '1'}}]]
            }, {
                id: '69',
                food_url: '../../images/Cheesecake.png',
                name: '芝士蛋糕',
                satisfy: ['甜点', '奶酪'],
                kitchen: [{kitchen_url: '../../images/Large_Casserole_Dish.png', kitchen_text: 'Large Casserole Dish'}],
                reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Sapphire_Medallion.png'
                }, {quantity: 2, coin: '../../images/Old_Coin.png'}],
                silver_reward: [{quantity: 1, coin: '../../images/Gnaw%27s_Favor.png'}, {
                    quantity: 1,
                    coin: '../../images/Red_Mark.png'
                }, {quantity: 3, coin: '../../images/Old_Coin.png'}],
                formula: [[{
                    kind: 'formula',
                    content: {formula_url: '../../images/Flour.png', formula_quantity: '1'}
                }], [{
                    kind: 'formula',
                    content: {formula_url: '../../images/Goat_Milk.png', formula_quantity: '2'}
                }], [{kind: 'formula', content: {formula_url: '../../images/Berries.png', formula_quantity: '1'}}]]
            }, {
                id: '70',
                food_url: '../../images/Syrup.png',
                name: 'Syrup',
                satisfy: ['None'],
                kitchen: [{kitchen_url: '../../images/Syrup_Pot.png', kitchen_text: 'Syrup Pot'}],
                reward: [],
                silver_reward: [],
                formula: [[{kind: 'formula', content: {formula_url: '../../images/Sap.png', formula_quantity: '3'}}]]
            }],
            satisfy_map: [{
                satisfy: '全部',
                ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
                show: true
            }, {satisfy: '甜点', ids: [20, 21, 22, 41, 42, 43, 44, 65, 66, 67, 68], show: false}, {
                satisfy: '面包',
                ids: [0, 3, 19, 24, 30, 32, 33, 34, 46, 47, 51, 60, 62, 66],
                show: false
            }, {satisfy: 'Fish', ids: [4, 8, 16, 17, 27, 33, 35, 39, 46, 55], show: false}, {
                satisfy: '蔬菜',
                ids: [1, 2, 5, 6, 7, 12, 13, 15, 23, 25, 28, 29, 30, 34, 48, 49, 53],
                show: false
            }, {
                satisfy: '零食',
                ids: [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 15, 19, 20, 23, 24, 25, 26, 27, 28, 30, 46, 47, 48, 53, 58],
                show: false
            }, {
                satisfy: 'Meat',
                ids: [9, 10, 14, 18, 19, 26, 31, 32, 36, 37, 38, 40, 51, 54, 56, 57, 59, 60, 61, 63],
                show: false
            }, {satisfy: '奶酪', ids: [45, 47, 48, 49, 50, 51, 56, 64, 68], show: false}, {
                satisfy: '意面',
                ids: [37, 38, 45, 50, 52, 64],
                show: false
            }, {satisfy: 'None', ids: [69], show: false}, {
                satisfy: '汤',
                ids: [2, 4, 7, 11, 15, 25, 31, 36, 48, 53],
                show: false
            }]
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let id = options.show + '.display'
        this.setData({
            id: true,
            show: this.data[options.show].name
        })

    }
})
