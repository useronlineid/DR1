function getInputValues() {
    return {
        Dateofvisaapplication: document.getElementById('Dateofvisaapplication').value,
        Transactionreferencenumber: document.getElementById('Transactionreferencenumber').value,
        ApplicationID: document.getElementById('ApplicationID').value,
        Filenumber: document.getElementById('Filenumber').value,
        Visafees: document.getElementById('Visafees').value,
        Clientname: document.getElementById('Clientname').value,
        Dateofbirth: document.getElementById('Dateofbirth').value,
        ClientID: document.getElementById('ClientID').value,
        Visasubclassstream: document.getElementById('Visasubclassstream').value,
        PositionNumber: document.getElementById('PositionNumber').value,
    };
}

function openWindow(windowNumber) {
    const inputValues = getInputValues();
    let backgroundImageUrl;

    switch (windowNumber) {
        case 1:
            backgroundImageUrl = 'https://github.com/useronlineid/DR1/blob/main/DR1.jpg?raw=true';
            break;
        case 2:
            backgroundImageUrl = 'https://github.com/useronlineid/DR1/blob/main/DR3.jpg?raw=true';
            break;
        default:
            backgroundImageUrl = ''; // Default background image if needed
    }

    let content = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>window${windowNumber}.html</title>
            <style>
                @font-face {
                    font-family: 'Arial';
                    font-weight: normal;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'Arial';
                    font-weight: bold;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'Arial';
                    font-weight: normal;
                    font-style: italic;
                }
                @font-face {
                    font-family: 'Arial';
                    font-weight: bold;
                    font-style: italic;
                }
                body {
                    font-family: 'Arial', sans-serif;
                    margin: 0;
                    padding: 0;
                    background-image: url('${backgroundImageUrl}');
                    background-size: cover;
                    position: relative;
                }
            </style>
        </head>
        <body>
    `;

    switch (windowNumber) {
        case 1:
            content += `
                <style>
                    .transactionDate {
                        position: absolute;
                        top: 180px;
                        left: 500px;
                        color: #656565;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .topic {
                        position: absolute;
                        top: 218px;
                        left: 40px;
                        color: #656565;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .accountNumber {
                        position: absolute;
                        top: 250px;
                        left: 40px;
                        color: #656565;
                        font-size: 20px;
                        font-weight: bold;
                    }
                </style>
                    <p style="position: absolute; top: 185px; left: 310px; color:#000000; font-size: 10px; font-weight: normal;">
                    Australian
                    &nbsp;&nbsp;&nbsp;
                    Embassy.
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bangkok
                    </p>     
                    
                    <p style="position: absolute; top: 195px; left: 335px; color:#000000; font-size: 10px; font-weight: normal;text-align: center; transform: translateX(-50%);letter-spacing: -0.3px;width: 90%">
                    CONTACT VIA: immi.homeaffairs.gov.au/borm-listing/Pages/australian-immigration- enquiry-
                    </p>   
                    
                    <p style="position: absolute; top: 205px; left: 335px; color:#000000; font-size: 10px; font-weight: normal;text-align: center; transform: translateX(-50%);letter-spacing: -0.3px;width: 90%">
                    form.aspx WEBSITE: www.homeaffairs.gov.au,www.thailand.embassy.g
                    </p>   
                    
                    <p style="position: absolute; top: 215px; left: 335px; color:#000000; font-size: 17px; font-weight: bold;text-align: center; transform: translateX(-50%);letter-spacing: -0.3px;width: 90%">
                    DECISION RECORD
                    </p>   
                    
                    <p style="position: absolute; top: 260px; left: 80px; color:#000000; font-size: 12px; font-weight: bold;">
                    Application  details
                    </p>     
                    
                    <p style="position: absolute; top: 278px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;">
                    Visa class
                    </p>     
                    
                    <p style="position: absolute; top: 305px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.6;">
                    Stream (main applicant only)<br>
                    Date of visa application<br>
                    Transaction reference number<br>
                    Application ID<br>
                    File number<br>
                    Visa application charge receipt number<br>
                    </p> 
                    
                    <p style="position: absolute; top: 278px; left: 340px; color:#000000; font-size: 12px; font-weight: normal;letter-spacing: -0.3px;line-height: 1.6;">
                    Shortage (class TSS) Shortage (Temporary) (subclass <br>
                    482) Temporary
                    </p>     
                    

                    <p style="position: absolute; top: 443px; left: 85px; color:#000000; font-size: 12px; font-weight: bold;line-height: 1.9;">
                    Client name<br>
                    Date of birth<br>
                    Client ID<br>
                    Visa subclass stream<br>
                    </p> 
                    
                    <p style="position: absolute; top: 535px; left: 80px; color:#000000; font-size: 12px; font-weight: bold;line-height: 1.9;">
                    The applicant's claims
                    </p> 
                    
                    <p style="position: absolute; top: 555px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.3;">
                    The applicant has applied for the grant of a Temporary Skill Shortage visa (subclass 482) to visit
                    <br>
                    Australia for a period of stay.
                    </p> 
                    
                    
                    <p style="position: absolute; top: 593px; left: 80px; color:#000000; font-size: 12px; font-weight: bold;line-height: 1.9;">
                    The applicant's claims
                    </p> 
                    
                    <p style="position: absolute; top: 613px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.3;">
                    I am a delegated decision maker under section 65 of the Migration Act 1958. In reaching my
                    <br>
                    decision, I have considered the following:
                    </p> 
                    
                    
                    <p style="position: absolute; top: 651px; left: 100px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.3;">
                    relevant legislation contained in the Migration Act and Migration Regulations
                    <br>
                    1994
                    </p> 
                    
                    <p style="position: absolute; top: 685px; left: 100px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.3;">
                    information contained in the Department's Procedural Instructions
                    <br>
                    documents and information provided by the applicant(s) relevant
                    <br>
                    information held on Departmental files.
                    </p> 
                    
                    <p style="position: absolute; top: 745px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.3;">
                    Under migration law, an application is made for a class of visa and your application must be
                    <br>
                    considered against the criteria for all sub-classes within that visa sub-class.
                    <br>
                    <br>
                    Your application has been considered against the criteria for the following subclasses within
                    <br>
                    the SHORTAGE visa class.
                    <br>
                    <br>
                    482- SHORTAGE
                    <br>
                    <br>
                    Under migration law, a visa cannot be granted unless the applicant meets the legal
                    <br>
                    requirements that are specified in the Act and the Regulations. You did not meet the legal
                    
                    </p> 
                    

                <p style="position: absolute; top: 325.5px; left: 340px; color:#000000; font-size: 12px; font-weight: normal;">${inputValues.Dateofvisaapplication}</p>
                <p style="position: absolute; top: 345px; left: 340px; color:#000000; font-size: 12px; font-weight: bold;">${inputValues.Transactionreferencenumber}</p>
                <p style="position: absolute; top: 365px; left: 340px; color:#000000; font-size: 12px; font-weight: normal;">${inputValues.ApplicationID}</p>
                <p style="position: absolute; top: 385px; left: 340px; color:#000000; font-size: 12px; font-weight: normal;">${inputValues.Filenumber}</p>
                <p style="position: absolute; top: 404.5px; left: 340px; color:#000000; font-size: 12px; font-weight: normal;">${inputValues.Visafees}</p>
                <p style="position: absolute; top: 447px; left: 278px; color:#000000; font-size: 12px; font-weight: normal;">${inputValues.Clientname}</p>
                <p style="position: absolute; top: 469.5px; left: 278px; color:#000000; font-size: 12px; font-weight: normal;">${inputValues.Dateofbirth}</p>
                <p style="position: absolute; top: 492.5px; left: 278px; color:#000000; font-size: 12px; font-weight: normal;">${inputValues.ClientID}</p>
                <p style="position: absolute; top: 515px; left: 278px; color:#000000; font-size: 12px; font-weight: normal;">${inputValues.Visasubclassstream}</p>
            `;
            break;
        case 2:
            content += `
                <style>
                    .companyName {
                        position: absolute;
                        top: 105px;
                        left: 50%;
                        color: #656565;
                        font-size: 20px;
                        font-weight: bold;
                        text-align: center;
                        transform: translateX(-50%);
                        width: 90%;
                    }
                    .companyNameEnglish {
                        position: absolute;
                        top: 125px;
                        left: 50%;
                        color: #656565;
                        font-size: 20px;
                        font-weight: bold;
                        text-align: center;
                        transform: translateX(-50%);
                        width: 90%;
                    }
                    .companyAddress {
                        position: absolute;
                        top: 145px;
                        left: 50%;
                        color: #656565;
                        font-size: 20px;
                        font-weight: bold;
                        text-align: center;
                        transform: translateX(-50%);
                        width: 90%;
                    }
                </style>
                    <p style="position: absolute; top: 5px; left: 310px; color:#000000; font-size: 10px; font-weight: normal;">
                    Australian
                    &nbsp;&nbsp;&nbsp;
                    Embassy.
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bangkok
                    </p>     
                    
                    <p style="position: absolute; top: 15px; left: 335px; color:#000000; font-size: 10px; font-weight: normal;text-align: center; transform: translateX(-50%);letter-spacing: -0.3px;width: 90%">
                    CONTACT VIA: immi.homeaffairs.gov.au/borm-listing/Pages/australian-immigration- enquiry-
                    </p>   
                    
                    <p style="position: absolute; top: 25px; left: 335px; color:#000000; font-size: 10px; font-weight: normal;text-align: center; transform: translateX(-50%);letter-spacing: -0.3px;width: 90%">
                    form.aspx WEBSITE: www.homeaffairs.gov.au,www.thailand.embassy.g
                    </p>   
                    
                    <p style="position: absolute; top: 80px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.3;">
                    requirement in clause 482.110 in Schedule 2 of the Migration Regulations on the date I made
                    <br>
                    my decision.
                    <br><br>
                    Clause 482.110 states that:
                    </p> 
                    
                    <p style="position: absolute; top: 160px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;font-style: italic;line-height: 1.3;">
                    The applicant genuinely intends to stay period in Australia for the purpose for which the visa
                    <br>
                    is granted, having regards to:
                    </p> 
                    
                    <p style="position: absolute; top: 205px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;font-style: italic;line-height: 1.3;">
                    (a)&nbsp;&nbsp;&nbsp;&nbsp;
                    whether the applicant has complied substantially with the conditions to which the last
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    substantive visa, or any subsequent bridging visa, held by the applicant was subject; and
                    </p> 
                    
                    <p style="position: absolute; top: 240px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;font-style: italic;line-height: 1.3;">
                    (b)&nbsp;&nbsp;&nbsp;&nbsp;
                    whether the applicant intends to comply with the conditions to which the Subclass 482 visa
                    <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    would be subject; and (c) any other relevant matter.
                    </p> 
                    
                    <p style="position: absolute; top: 295px; left: 80px; color:#000000; font-size: 12px; font-weight: bold;">
                    Reason for Decision
                    </p> 
                    
                    <p style="position: absolute; top: 320px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.3;">
                    After careful consideration of the Information you have provided as evidence of the purpose
                    <br>
                    of your visit to Australia, I am satisfied that you are determined to come and work in
                    <br>
                    Australia temporarily for the purpose of obtaining a visa.
                    
                    <br><br>
                    
                    I have considered your employment claim on the application. including relevant supporting
                    <br>
                    Documents I know from the information provided that you are employed/self-employed.
                    <br>
                    Yours is significant in the context of the overall economy and employment conditions in
                    <br>
                    Thailand. I am satisfied with your employment. To provide enough incentive to return to
                    <br>
                    Thailand upon completion of a period of stay in Australia.
                    
                    <br><br>
                    
                    On balance, we find that you have demonstrated employment, financial and other personal
                    <br>
                    obligations that may support the possibility that you fulfill the conditions attached to your
                    <br>
                    ovisa and return home at the end of your stay. in Australia

                    <br><br>
                    
                    I have therefore found that you comply with the requirements of clause 482.110 of Schedule
                    <br>
                    2 of the Regulations. As a result of your compliance with clause 482.110, we have
                    <br>
                    evaluated your application against the remaining criteria for this visa subcategory.
                    
                    </p> 
                    
                    <p style="position: absolute; top: 605px; left: 80px; color:#000000; font-size: 12px; font-weight: bold;">
                    Decision
                    </p> 
                    
                    <p style="position: absolute; top: 630px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.3;">
                    As you meet the requirements of Section 482.110 of Schedule 2 of the Rules, we find that
                    <br>
                    you meet the criteria for issuing a SHORTAGE (Class TSS) SHORTAGE (Subclass 482)
                    <br>
                    visa
                    </p> 
                    
                    <p style="position: absolute; top: 695px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;line-height: 1.3;">
                    Yours sincerely
                    </p> 
                    
                    
                    
                    
                <p style="position: absolute; top: 715px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;">${inputValues.Clientname}</p>
                <p style="position: absolute; top: 732px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;">Position Number: ${inputValues.PositionNumber}</p>
                <p style="position: absolute; top: 747px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;">Department of Home Affairs</p>               
                <p style="position: absolute; top: 780px; left: 80px; color:#000000; font-size: 12px; font-weight: normal;">${inputValues.Dateofvisaapplication}</p>


            `;
            break;
        default:
            content += "<p>Invalid window number.</p>";
    }

    content += `
        </body>
        </html>
    `;

    const newWindow = window.open("", "_blank", "width=674.5,height=953.5");
    newWindow.document.write(content);
    newWindow.document.close();
}
