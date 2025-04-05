package org.rookedsysc.mediumclone.common.status

interface StatusIfs {
    fun getHttpStatusCode(): Int

    fun getCustomStatusCode(): Int

    fun getDescription(): String
}
