import { SearchBar } from "./SearchBar/SearchBar"
import { ActionsContainer } from "./ActionsContainer/ActionsContainer"
import { Toolbar } from "@mui/material"

export const TableToolBar = () => {
    return (
        <>
            <Toolbar>
                <SearchBar />
                <ActionsContainer />
            </Toolbar>
        </>
    )
}
