import prisma from "../src/db/database.js"

async function main() {

    await prisma.clients.createMany({
        data: [
            {
                "name": "Lucas",
                "phone": "31999999999",
                "cpf": "99999999999"
            },
            {
                "name": "Andre",
                "phone": "31999999991",
                "cpf": "99999999991"
            },
        ]
    }),

    await prisma.employees.createMany({
        data: [
            {
                "name": "Carlos",
            },
            {
                "name": "Joao",
            },
        ]
    }),

    await prisma.haircuts.createMany({
        data: [
            {
                "haircut": "Degrade",
            },
            {
                "haircut": "Surfista",
            },
        ]
    }),

    await prisma.schedules.createMany({
        data: [
            {
                "client_id": 1,
                "haircut_id": 1,
                "employee_id": 1,
                "date": "2023-01-29T17:12:56.919Z"
            },
            {
                "client_id": 2,
                "haircut_id": 1,
                "employee_id": 2,
                "date": "2023-01-29T17:12:56.919Z"
            },
        ]
    })
}

main()
    .then(() => {
        console.log("Registro cirado com sucesso!")
    })
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$connect();
    })