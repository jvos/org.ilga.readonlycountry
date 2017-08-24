//CRM.$(window).load(function(){
CRM.$(function() {
    console.log('readonlycountry');
    
    // your code
    CRM.$('#on-behalf-block #editrow-country-Primary #s2id_onbehalf_country-Primary').hide();
    CRM.$('#on-behalf-block #editrow-country-Primary #onbehalf_country-Primary').show();
    CRM.$('#on-behalf-block #editrow-country-Primary #onbehalf_country-Primary').prop('disabled', true);
    
    $('#Main.CRM_Contribute_Form_Contribution_Main').on('submit', function() {
        $('#on-behalf-block #editrow-country-Primary #onbehalf_country-Primary').prop('disabled', false);
    });
});