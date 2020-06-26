import Color from '../../Domain/entities/Visit';
import ColorRepository from '../../Domain/repo/Visit';

const getVisits = (repo: ColorRepository) => async(page:number=0) =>{

    const VISITS_PER_PAGE:number = 5;

    let from:number = 0;
    const limit:number = VISITS_PER_PAGE;

    if(page > 0){
        from = (page - 1) * VISITS_PER_PAGE;
    }

    const colors: Color[] = await repo.getVisits(from, limit);

    // Pagination information

    // Set current functional pagination (actual current page)
    const currentPage = (page===0)? 1: page;
    const totalItems = await repo.countTotalVisits();
    const totalPages = Math.ceil(totalItems / VISITS_PER_PAGE);

    return {
        color_list: colors,
        current_page: currentPage,
        total_items: totalItems,
        total_pages: totalPages
    }
}

export default getVisits;