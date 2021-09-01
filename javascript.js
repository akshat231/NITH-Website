$('.about')[0].onmouseover=function(){mouseOver('.hidden1')}
$('.auth')[0].onmouseover=function(){mouseOver('.hidden2')}
$('.admin')[0].onmouseover=function(){mouseOver('.hidden3')}
$('.depart')[0].onmouseover=function(){mouseOver('.hidden4')}
$('.academic')[0].onmouseover=function(){mouseOver('.hidden5')}
$('.student')[0].onmouseover=function(){mouseOver('.hidden6')}
$('.faculty')[0].onmouseover=function(){mouseOver('.hidden7')}
$('.alumni')[0].onmouseover=function(){mouseOver('.hidden8')}
$('.downloads')[0].onmouseover=function(){mouseOver('.hidden9')}

$('.about')[0].onmouseout=function(){mouseOut('.hidden1')}
$('.auth')[0].onmouseout=function(){mouseOut('.hidden2')}
$('.admin')[0].onmouseout=function(){mouseOut('.hidden3')}
$('.depart')[0].onmouseout=function(){mouseOut('.hidden4')}
$('.academic')[0].onmouseout=function(){mouseOut('.hidden5')}
$('.student')[0].onmouseout=function(){mouseOut('.hidden6')}
$('.faculty')[0].onmouseout=function(){mouseOut('.hidden7')}
$('.alumni')[0].onmouseout=function(){mouseOut('.hidden8')}
$('.downloads')[0].onmouseout=function(){mouseOut('.hidden9')}

$('.about')[0].onmouseleave=function(){mouseOut('.hidden1')}
$('.auth')[0].onmouseleave=function(){mouseOut('.hidden2')}
$('.admin')[0].onmouseleave=function(){mouseOut('.hidden3')}
$('.depart')[0].onmouseleave=function(){mouseOut('.hidden4')}
$('.academic')[0].onmouseleave=function(){mouseOut('.hidden5')}
$('.student')[0].onmouseleave=function(){mouseOut('.hidden6')}
$('.faculty')[0].onmouseleave=function(){mouseOut('.hidden7')}
$('.alumni')[0].onmouseleave=function(){mouseOut('.hidden8')}
$('.downloads')[0].onmouseleave=function(){mouseOut('.hidden9')}

$('.about')[0].onmouseenter=function(){mouseOver('.hidden1')}
$('.auth')[0].onmouseenter=function(){mouseOver('.hidden2')}
$('.admin')[0].onmouseenter=function(){mouseOver('.hidden3')}
$('.depart')[0].onmouseenter=function(){mouseOver('.hidden4')}
$('.academic')[0].onmouseenter=function(){mouseOver('.hidden5')}
$('.student')[0].onmouseenter=function(){mouseOver('.hidden6')}
$('.faculty')[0].onmouseenter=function(){mouseOver('.hidden7')}
$('.alumni')[0].onmouseenter=function(){mouseOver('.hidden8')}
$('.downloads')[0].onmouseenter=function(){mouseOver('.hidden9')}

$('.hidden1')[0].onmouseout=function(){mouseOut('.hidden1')}
$('.hidden2')[0].onmouseout=function(){mouseOut('.hidden2')}
$('.hidden3')[0].onmouseout=function(){mouseOut('.hidden3')}
$('.hidden4')[0].onmouseout=function(){mouseOut('.hidden4')}
$('.hidden5')[0].onmouseout=function(){mouseOut('.hidden5')}
$('.hidden6')[0].onmouseout=function(){mouseOut('.hidden6')}
$('.hidden7')[0].onmouseout=function(){mouseOut('.hidden7')}
$('.hidden8')[0].onmouseout=function(){mouseOut('.hidden8')}
$('.hidden9')[0].onmouseout=function(){mouseOut('.hidden9')}

$('.hidden1')[0].onmouseover=function(){mouseOver('.hidden1')}
$('.hidden2')[0].onmouseover=function(){mouseOver('.hidden2')}
$('.hidden3')[0].onmouseover=function(){mouseOver('.hidden3')}
$('.hidden4')[0].onmouseover=function(){mouseOver('.hidden4')}
$('.hidden5')[0].onmouseover=function(){mouseOver('.hidden5')}
$('.hidden6')[0].onmouseover=function(){mouseOver('.hidden6')}
$('.hidden7')[0].onmouseover=function(){mouseOver('.hidden7')}
$('.hidden8')[0].onmouseover=function(){mouseOver('.hidden8')}
$('.hidden9')[0].onmouseover=function(){mouseOver('.hidden9')}
function mouseOver(e)
{
    $(e)[0].style.display="block"
}
function mouseOut(e)
{
    $(e)[0].style.display="none";
}