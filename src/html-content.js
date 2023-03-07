const GenerateHtmlContent = (projectName, managerInfoHtml, engineerInfoHtml, internInfoHtml) => {
    const htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${projectName}</title>
        <link rel="stylesheet" href="./src/css/styles.css">
    </head>
    <body>
        <header>
            <h1>${projectName}</h1>
        </header>
        <main>
            <div class="employee-container">
                <div class="manager">
                    <h3 class="manager-role-title">Project Manager</h3>
                    <div class="manager-content">
                        ${managerInfoHtml}
                    </div>
                </div>
                <div class="team">
                    <div class="engineers">
                        <h3 class="engineer-role-title">Engineers</h3>
                        <div class="engineers-content">
                            ${engineerInfoHtml}
                        </div>
                    </div>
                    <div class="interns">
                        <h3 class="intern-role-title">Interns</h3>
                        <div class="interns-content">
                        ${internInfoHtml}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
    </body>
    </html>`
   return htmlContent; 
}

//this function should take manager info and map it to HTML/CSS
const ManagerInfoHTML = (manager) => {
    const managerInfoHtml = `<div class="employee-content-line name"><b>Name:</b> ${manager.name}</div>
    <div class="employee-content-line"><b>Employee ID:</b> ${manager.id}</div>
    <div class="employee-content-line"><b>Email:</b><a href="mailto:${manager.email}">${manager.email}</a></div>
    <div class="employee-content-line"><b>Office:</b> ${manager.officeNumber}</div>
    `;
    return managerInfoHtml;

}

//this function should take the ARRAY of all the engineer roles created and map them to HTML/CSS
const EngineerInfoHTML = (engineers) => {
    let engineerInfoHtml = ``;
    //for each intern in the engineer array this code will build the following html and append it to the engineerInfoHTML
    for(let i = 0; i < engineers.length; i++){
    let individualEngineerCard = `<div class="employee-card">
    <div class="employee-content-line name"><b>Name:</b> ${engineers[i].name}</div>
    <div class="employee-content-line"><b>Employee ID:</b> ${engineers[i].id}</div>
    <div class="employee-content-line"><b>Email:</b> <a href="mailto:${engineers[i].email}">${engineers[i].email}</a></div>
    <div class="employee-content-line"><b>Github:</b> <a href="https://www.github.com/${engineers[i].github}">${engineers[i].github}</a></div>
    </div class="employee-card">`
    engineerInfoHtml += individualEngineerCard;
    };
    return engineerInfoHtml;
}

//this function should take the ARRAY of all the intern roles created and map them to HTML/CSS
const InternInfoHTML = (interns) => {
    let internInfoHtml = ``;

    //for each intern in the intern array this code will build the following html and append it to the internInfoHTML
    for(let i = 0; i < interns.length; i++){
        let individualInternCard =`<div class="employee-card">
        <div class="employee-content-line name"><b>Name:</b> ${interns[i].name}</div>
        <div class="employee-content-line"><b>Employee ID:</b> ${interns[i].id}</div>
        <div class="employee-content-line"><b>Email:</b> <a href="mailto:${interns[i].email}">${interns[i].email}</a></div>
        <div class="employee-content-line"><b>School:</b> ${interns[i].school}</div>
        </div>`
        internInfoHtml += individualInternCard;
        };
    return internInfoHtml;
}

module.exports = {GenerateHtmlContent, ManagerInfoHTML, EngineerInfoHTML, InternInfoHTML}
