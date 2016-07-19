/**
 * Created by duanxue on 16-7-18.
 */
'use strict';
function calculateSubCount(cartItem)
{
    let  mergedCartItem=[];
    for(let i=0;i<cartItem.length;i++)
    {
        let existItem= mergedCartItem.find(function(item){return item.barcode===cartItem[i].barcode});//item传递的shi result数组中各个对象
        if(existItem){
            existItem.count++;//existItem与result某个经过回调对象验证为 true的成员共同指向一个count.
        }
        else {
            mergedCartItem.push(Object.assign({},cartItem[i],{count:1}));
        }
    }
    return  mergedCartItem;
}
function calculateSubtotal(mergedCartItem)
{
    let subItem=[];
    for(let i=0;i<mergedCartItem.length;i++)
    {
        subItem.push(Object.assign({},mergedCartItem[i],{subtotal:mergedCartItem[i].price*mergedCartItem[i].count}));
    }
    return subItem;
}
function calculateTotal(subItem)
{
    let totalItem={};
    totalItem.receiptItems=subItem;
    totalItem.total=0;
    for(let i=0;i<subItem.length;i++)
    {
        totalItem.total+=subItem[i].subtotal;
    }
    return totalItem;
}
function printReceipt(cartItem)
{
    let mergedCartItem=calculateSubCount(cartItem);
    let subItem=calculateSubtotal(mergedCartItem);
    let totalItem=calculateTotal(subItem);
    print(totalItem);
}
function print(totalItem)
{
    for(let i=0;i<totalItem.receiptItems.length;i++)
    {
        console.log('可口可乐:'+totalItem.receiptItems[i].name+'     '+totalItem.receiptItems[i].count+totalItem.receiptItems[i].unit+'     '+'单价:'+totalItem.receiptItems[i].price+'     '+'小计:'+totalItem.receiptItems[i].subtotal);
    }
    console.log('合计：'+totalItem.total);
}
let cartItem=[
    {
        barcode:'Iten00001',
        name:'可口可乐',
        unit:'瓶',
        price:3.00
    },
    {
        barcode:'Iten00001',
        name:'可口可乐',
        unit:'瓶',
        price:3.00
    },
    {
        barcode:'Iten00002',
        name:'百事可乐',
        unit:'瓶',
        price:4.00
    }
            ];
printReceipt(cartItem);
//module.exports = jian_separators;
