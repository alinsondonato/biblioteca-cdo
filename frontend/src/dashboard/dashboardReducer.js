const INITIAL_STATE = { summary: { disponivel: 0, manutencao: 0, reservado: 0, emprestado: 0 } }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}