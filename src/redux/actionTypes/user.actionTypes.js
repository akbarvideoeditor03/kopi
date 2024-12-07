export const userActionTypes = {
    // User(CRUD)
    GET_USER_LIST_REQUEST: 'GET_USER_LIST_REQUEST',
    GET_USER_LIST_SUCCESS: 'GET_USER_LIST_SUCCESS',
    GET_USER_LIST_FAILURE: 'GET_USER_LIST_FAILURE',

    GET_USER_ID_LIST_REQUEST: 'GET_USER_ID_LIST_REQUEST',
    GET_USER_ID_LIST_SUCCESS: 'GET_USER_ID_LIST_SUCCESS',
    GET_USER_ID_LIST_FAILURE: 'GET_USER_ID_LIST_FAILURE',

    // Create (POST)
    CREATE_USER_REQUEST: 'CREATE_USER_REQUEST',
    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILURE: 'CREATE_USER_FAILURE',

    // Update (PUT)
    UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
    UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
    UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE',

    // Delete (DELETE)
    DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILURE: 'DELETE_USER_FAILURE',

    // Pendidikan Terakhir (CRUD)
    CREATE_PENDIDIKAN_ID_REQUEST: 'CREATE_PENDIDIKAN_ID_REQUEST',
    CREATE_PENDIDIKAN_ID_SUCCESS: 'CREATE_PENDIDIKAN_ID_SUCCESS',
    CREATE_PENDIDIKAN_ID_FAILURE: 'CREATE_PENDIDIKAN_ID_FAILURE',

    GET_PENDIDIKAN_ID_REQUEST: 'GET_PENDIDIKAN_ID_REQUEST',
    GET_PENDIDIKAN_ID_SUCCESS: 'GET_PENDIDIKAN_ID_SUCCESS',
    GET_PENDIDIKAN_ID_FAILURE: 'GET_PENDIDIKAN_ID_FAILURE',

    UPDATE_PENDIDIKAN_ID_REQUEST: 'UPDATE_PENDIDIKAN_ID_REQUEST',
    UPDATE_PENDIDIKAN_ID_SUCCESS: 'UPDATE_PENDIDIKAN_ID_SUCCESS',
    UPDATE_PENDIDIKAN_ID_FAILURE: 'UPDATE_PENDIDIKAN_ID_FAILURE',

    DELETE_PENDIDIKAN_ID_REQUEST: 'DELETE_PENDIDIKAN_ID_REQUEST',
    DELETE_PENDIDIKAN_ID_SUCCESS: 'DELETE_PENDIDIKAN_ID_SUCCESS',
    DELETE_PENDIDIKAN_ID_FAILURE: 'DELETE_PENDIDIKAN_ID_FAILURE',

    // Pengalaman Kerja (CRUD)
    CREATE_PENGALAMAN_REQUEST: 'CREATE_PENGALAMAN_REQUEST',
    CREATE_PENGALAMAN_SUCCESS: 'CREATE_PENGALAMAN_SUCCESS',
    CREATE_PENGALAMAN_FAILURE: 'CREATE_PENGALAMAN_FAILURE',

    GET_PENGALAMAN_ID_REQUEST: 'GET_PENGALAMAN_ID_REQUEST',
    GET_PENGALAMAN_ID_SUCCESS: 'GET_PENGALAMAN_ID_SUCCESS',
    GET_PENGALAMAN_ID_FAILURE: 'GET_PENGALAMAN_ID_FAILURE',

    UPDATE_PENGALAMAN_REQUEST: 'UPDATE_PENGALAMAN_REQUEST',
    UPDATE_PENGALAMAN_SUCCESS: 'UPDATE_PENGALAMAN_SUCCESS',
    UPDATE_PENGALAMAN_FAILURE: 'UPDATE_PENGALAMAN_FAILURE',

    DELETE_PENGALAMAN_REQUEST: 'DELETE_PENGALAMAN_REQUEST',
    DELETE_PENGALAMAN_SUCCESS: 'DELETE_PENGALAMAN_SUCCESS',
    DELETE_PENGALAMAN_FAILURE: 'DELETE_PENGALAMAN_FAILURE',

    // Prestasi Kerja (CRUD)
    CREATE_PRESTASI_ID_REQUEST: 'CREATE_PRESTASI_ID_REQUEST',
    CREATE_PRESTASI_ID_SUCCESS: 'CREATE_PRESTASI_ID_SUCCESS',
    CREATE_PRESTASI_ID_FAILURE: 'CREATE_PRESTASI_ID_FAILURE',

    GET_PRESTASI_ID_REQUEST: 'GET_PRESTASI_ID_REQUEST',
    GET_PRESTASI_ID_SUCCESS: 'GET_PRESTASI_ID_SUCCESS',
    GET_PRESTASI_ID_FAILURE: 'GET_PRESTASI_ID_FAILURE',

    UPDATE_PRESTASI_ID_REQUEST: 'UPDATE_PRESTASI_ID_REQUEST',
    UPDATE_PRESTASI_ID_SUCCESS: 'UPDATE_PRESTASI_ID_SUCCESS',
    UPDATE_PRESTASI_ID_FAILURE: 'UPDATE_PRESTASI_ID_FAILURE',

    DELETE_PRESTASI_ID_REQUEST: 'DELETE_PRESTASI_ID_REQUEST',
    DELETE_PRESTASI_ID_SUCCESS: 'DELETE_PRESTASI_ID_SUCCESS',
    DELETE_PRESTASI_ID_FAILURE: 'DELETE_PRESTASI_ID_FAILURE',

    // Keahlian (CRUD)
    CREATE_KEAHLIAN_ID_REQUEST: 'CREATE_KEAHLIAN_ID_REQUEST',
    CREATE_KEAHLIAN_ID_SUCCESS: 'CREATE_KEAHLIAN_ID_SUCCESS',
    CREATE_KEAHLIAN_ID_FAILURE: 'CREATE_KEAHLIAN_ID_FAILURE',

    GET_KEAHLIAN_ID_REQUEST: 'GET_KEAHLIAN_ID_REQUEST',
    GET_KEAHLIAN_ID_SUCCESS: 'GET_KEAHLIAN_ID_SUCCESS',
    GET_KEAHLIAN_ID_FAILURE: 'GET_KEAHLIAN_ID_FAILURE',

    UPDATE_KEAHLIAN_ID_REQUEST: 'UPDATE_KEAHLIAN_ID_REQUEST',
    UPDATE_KEAHLIAN_ID_SUCCESS: 'UPDATE_KEAHLIAN_ID_SUCCESS',
    UPDATE_KEAHLIAN_ID_FAILURE: 'UPDATE_KEAHLIAN_ID_FAILURE',

    DELETE_KEAHLIAN_ID_REQUEST: 'DELETE_KEAHLIAN_ID_REQUEST',
    DELETE_KEAHLIAN_ID_SUCCESS: 'DELETE_KEAHLIAN_ID_SUCCESS',
    DELETE_KEAHLIAN_ID_FAILURE: 'DELETE_KEAHLIAN_ID_FAILURE',

    // Pelatihan (CRUD)
    CREATE_PELATIHAN_ID_REQUEST: 'CREATE_PELATIHAN_ID_REQUEST',
    CREATE_PELATIHAN_ID_SUCCESS: 'CREATE_PELATIHAN_ID_SUCCESS',
    CREATE_PELATIHAN_ID_FAILURE: 'CREATE_PELATIHAN_ID_FAILURE',

    GET_PELATIHAN_ID_REQUEST: 'GET_PELATIHAN_ID_REQUEST',
    GET_PELATIHAN_ID_SUCCESS: 'GET_PELATIHAN_ID_SUCCESS',
    GET_PELATIHAN_ID_FAILURE: 'GET_PELATIHAN_ID_FAILURE',

    UPDATE_PELATIHAN_ID_REQUEST: 'UPDATE_PELATIHAN_ID_REQUEST',
    UPDATE_PELATIHAN_ID_SUCCESS: 'UPDATE_PELATIHAN_ID_SUCCESS',
    UPDATE_PELATIHAN_ID_FAILURE: 'UPDATE_PELATIHAN_ID_FAILURE',

    DELETE_PELATIHAN_ID_REQUEST: 'DELETE_PELATIHAN_ID_REQUEST',
    DELETE_PELATIHAN_ID_SUCCESS: 'DELETE_PELATIHAN_ID_SUCCESS',
    DELETE_PELATIHAN_ID_FAILURE: 'DELETE_PELATIHAN_ID_FAILURE',

    // Combined Data
    SET_USER_DETAILS: 'SET_USER_DETAILS',
    SET_PENGALAMAN_KERJA: 'SET_PENGALAMAN_KERJA',
    SET_PRESTASI_KERJA: 'SET_PRESTASI_KERJA',
    SET_PENDIDIKAN_TERAKHIR: 'SET_PENDIDIKAN_TERAKHIR',
    SET_KEAHLIAN: 'SET_KEAHLIAN',
    SET_PELATIHAN: 'SET_PELATIHAN',
    COMBINED_DATA: 'COMBINED_DATA',
};
