

export function Dashboard(){
    return(
        <div className="container mx-auto">
            <div className="flex flex-wrap justify-between">
                <div>
                    <table>
                        <thead>
                            <tr className="text-center">
                                <th colSpan={5}>Информация о пользователей</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Имя
                                </td>
                                <td>
                                    Фамилия
                                </td>
                                <td>
                                    Почта
                                </td>
                                <td>
                                    Тел
                                </td>
                                <td>
                                    Кошелек
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                    Polat
                                </td>
                                <td>
                                    Jumabaev
                                </td>
                                <td>
                                    jumabaev142@gmail.com
                                </td>
                                <td>
                                    +998975066999
                                </td>
                                <td>
                                    10$
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
}