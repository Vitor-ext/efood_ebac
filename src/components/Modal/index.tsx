import Button from '../Button'
import * as S from './styles'

import Close from '../../assets/images/close.svg'
import { MenuItem } from '../../pages/Home'

export type Props = {
  isVisible: boolean
  onClose: () => void
  menuItem?: MenuItem
}

const Modal = ({ isVisible, onClose, menuItem }: Props) => {
  const PriceFormatter = (preco = 0) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <S.ModalContainer className={isVisible ? 'visible' : ''}>
      <S.ModalContent className="container">
        <S.FoodDetails>
          <h3>{menuItem?.nome}</h3>
          <p>
            {menuItem?.descricao} <span>{menuItem?.porcao}</span>
          </p>
          <img src={Close} alt="fechar modal" onClick={onClose} />

          <Button title="Adicionar ao carrinho">
            Adicionar ao carrinho - {PriceFormatter(menuItem?.preco)}
          </Button>
        </S.FoodDetails>
        <img src={menuItem?.foto} alt="" />
      </S.ModalContent>

      <div className="overlay" onClick={onClose}></div>
    </S.ModalContainer>
  )
}
export default Modal