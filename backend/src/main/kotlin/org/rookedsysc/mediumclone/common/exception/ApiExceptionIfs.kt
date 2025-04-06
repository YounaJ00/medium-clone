package org.rookedsysc.mediumclone.common.exception

import org.rookedsysc.mediumclone.common.status.StatusIfs

interface ApiExceptionIfs {
    val status: StatusIfs
    val detail: String
}
