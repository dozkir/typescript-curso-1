export function domInjector(seletor: string) {
    return function (
        target: any,
        propertyKey: string // nome do atributo decorado
    ) {

        let elemento: HTMLElement | null = null;

        const getter = function (){

            if(!elemento){
                console.log(`Buscando ${seletor} para injetar em ${propertyKey}`);
                elemento = <HTMLElement>document.querySelector(seletor);
            }

            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}