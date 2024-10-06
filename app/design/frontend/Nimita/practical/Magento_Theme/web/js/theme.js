/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'mage/smart-keyboard-handler',
    'mage/mage',
    "mage/sticky",
    'domReady!'
], function ($, keyboardHandler) {
    'use strict';

    $('.cart-summary').mage('sticky', {
        container: '#maincontent'
    });
    // $('.product.info.detailed').sticky({
    //     container: 'body'
    // });
    // $('.product-info-main').sticky({
    //     container: 'body'
    // });
    // $('.media .towishlist').sticky({
    //     container: '#maincontent'
    // });
    

    $('.panel.header > .header.links').clone().appendTo('#store\\.links');
    $('#store\\.links li a').each(function () {
        var id = $(this).attr('id');

        if (id !== undefined) {
            $(this).attr('id', id + '_mobile');
        }
    });
    keyboardHandler.apply();
});
