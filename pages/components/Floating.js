import Styles from '../../styles/Floating.module.css'

const Floating = () => {
    return (
        <div>
            <div className={'position-absolute text-right ' + Styles.floatingActionMenu} style={{ bottom: '10px', right: '10px' }}>
                <div class={Styles.actionmenu}>
                    <div class="floating-action">
                        <div class="badge badge-dark">Add Product</div>
                        <a class="btn-floating btn-sm btn-secondary"><i class="fas fa-plus"></i></a>
                    </div>
                    <div class="floating-action">
                        <div class="badge badge-dark">Save Order</div>
                        <a class="btn-floating btn-sm btn-success"><i class="fas fa-save"></i></a>
                    </div>
                </div>
                <div class="d-block action-button">
                    <a class="btn-floating btn-primary" onclick="$(this).closest('div.floating-action-menu').toggleClass('active')">
                        <i class="fas fa-plus"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Floating;