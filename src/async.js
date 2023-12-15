const comParametros = (login, senha) =>
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => 
        {
            resolve(`Bem-vindo: ${login}`);
        }, 3000);
    });
}

const funcaoMtoPesada = new Promise((resolve, reject) =>
{
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++)
    {
        execucoes++;
    }
    resolve(execucoes);
});

async function execucaoPrincipal()
{
    console.log("Início");

    try
    {
        const resultado = await funcaoMtoPesada;
        console.log(resultado);
    }
    catch(e)
    {
        console.log(e);
    }

    comParametros('dimas@silva.com.br', 'crys1234').then(resultado =>
    {
        console.log(resultado);
    });

    console.log("Fim");
}

execucaoPrincipal();
