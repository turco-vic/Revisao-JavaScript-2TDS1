        let ingressoscomprados = 7;
        
        let batatasgratis = 0;

        let nome = "Enzo";

        for (let i = 1; i <= ingressoscomprados; i++) {
            if (i % 3 === 0) {
                batatasgratis++;
            }
        }
        
        console.log ("Olá " + nome + ", você ganhou " + batatasgratis + " batatas da promoção")