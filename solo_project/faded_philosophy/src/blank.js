import ToneAnalyzerV3 from 'ibm-watson/tone-analyzer/v3';
console.log(ToneAnalyzerV3)
// import API_KEY from 'watson-api.env'

const toneAnalyzer = new ToneAnalyzerV3({
    version:"2017–09–21",
    iam_apikey: "PPoKBqKpcZ53u-dNBLTNzlEQp_AVmI9t-OrHuCVnEfDP",
    url: "https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/dc757d36-9354-45fd-b2ab-2ffe0ffe6858"
});

const text = "Hello all you good people, I hope you are having a great day!"

const toneParams = {
    tone_input: {'text': text},
    content_type: 'application/json',
};

toneAnalyzer.tone(toneParams)
    .then(toneAnalysis => {
        console.log(JSON.stringify(toneAnalysis, null, 2));
    })
    .catch(err => {
        console.log('error:', err)
    });