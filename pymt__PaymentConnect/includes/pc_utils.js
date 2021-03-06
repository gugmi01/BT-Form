
function detectCardType(number) {
    var re = {
        electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
        maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        dankort: /^(5019)\d+$/,
        interpayment: /^(636)\d+$/,
        unionpay: /^(62|88)\d+$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/
    };
    if (re.electron.test(number)) {
        return 'Electron';
    } else if (re.maestro.test(number)) {
        return 'Maestro';
    } else if (re.dankort.test(number)) {
        return 'Dankort';
    } else if (re.interpayment.test(number)) {
        return 'Interpayment';
    } else if (re.unionpay.test(number)) {
        return 'UnionPay';
    } else if (re.visa.test(number)) {
        return 'Visa';
    } else if (re.mastercard.test(number)) {
        return 'MasterCard';
    } else if (re.amex.test(number)) {
        return 'Amex';
    } else if (re.diners.test(number)) {
        return 'Diners Club';
    } else if (re.discover.test(number)) {
        return 'Discover';
    } else if (re.jcb.test(number)) {
        return 'JCB';
    } else {
        return '';
    }
}
	   
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}