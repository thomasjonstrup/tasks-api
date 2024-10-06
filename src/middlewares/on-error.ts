import type { ErrorHandler } from "hono";
import type { StatusCode } from "hono/utils/http-status";

import { INTERNAL_SERVER_ERROR, OK } from "@/http-status-codes";

const onError: ErrorHandler = (error, context) => {
	const currentStatus = 'status' in error ? error.status : context.newResponse(null).status;

	const statusCode = currentStatus !== OK ? (currentStatus as StatusCode) : INTERNAL_SERVER_ERROR;

	const env = context.env?.NODE_ENV || process.env?.NODE_ENV;

	return context.json({
		message: error.message,
		stack: env === 'production' ? undefined : error.stack
	}, statusCode);
}

export default onError;