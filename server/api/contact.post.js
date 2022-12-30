export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    await fetch(process.env.WEBHOOK_URL + "?wait=true",
        {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify(
                {
                    "content": null,
                    "embeds": [
                        {
                            "title": `**${body.name}**: **\`${body.title}\`**`,
                            "description": `\`${body.description}\``,
                            "color": 3092790,
                            "timestamp": new Date()
                        }
                    ],
                    "attachments": []
                }
            )
        }
    ).then();

    console.log(`| new Message from: ${body.name}`);


    return {
        statusCode: 200,
    }
});