import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    try {
        context.res = {
            status: 200,
            body: {
                test: 'test'
            },
        };
        
    } catch (error) {
        context.res =  {
            status: 400,
            body: error
        }
    }
};

export default httpTrigger;